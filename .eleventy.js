const Image = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginRss);

  // Pass-through copy for static assets
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("public");

  // Date filters
  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("dateToISO", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISO();
  });

  // Price formatting filter
  eleventyConfig.addFilter("formatPrice", (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  });

  // Category filter
  eleventyConfig.addFilter("filterByCategory", function(items, category) {
    if (!items) return [];
    return items.filter(item => item.category === category);
  });

  // Limit filter
  eleventyConfig.addFilter("limit", function(items, limit) {
    if (!items) return [];
    return items.slice(0, limit);
  });

  // Slug filter
  eleventyConfig.addFilter("slug", function(str) {
    if (!str) return "";
    return str.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  });

  // Image shortcode
  eleventyConfig.addShortcode("image", async function(src, alt, sizes = "100vw") {
    if (!src) return '';
    
    let metadata = await Image(src, {
      widths: [300, 600, 900],
      formats: ["avif", "webp", "jpeg"],
      outputDir: "./_site/img/",
      urlPath: "/img/"
    });
    
    let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    };
    
    return Image.generateHTML(metadata, imageAttributes);
  });

  // Collections
  eleventyConfig.addCollection("products", function(collection) {
    return collection.getFilteredByGlob("src/products/*.md");
  });

  eleventyConfig.addCollection("categories", function(collection) {
    return collection.getFilteredByGlob("src/categories/*.md");
  });

  // Sort products by date
  eleventyConfig.addFilter("sortByDate", function(items) {
    return items.slice().sort((a, b) => b.date - a.date);
  });

  // Get related products
  eleventyConfig.addFilter("getRelatedProducts", function(products, currentProduct, limit = 3) {
    if (!products || !currentProduct) return [];
    
    return products
      .filter(product => 
        product.category === currentProduct.category && 
        product.slug !== currentProduct.slug
      )
      .slice(0, limit);
  });

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // Enable per-build caching
  eleventyConfig.setServerOptions({
    showAllHosts: true,
    cache: true
  });

  // Reduce processing by ignoring certain directories
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add(".git/**");
  eleventyConfig.ignores.add("dist/**");

  // Copy the `src/assets` directory to `_site/assets`
  eleventyConfig.addPassthroughCopy("src/assets");

  // Base Config
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};