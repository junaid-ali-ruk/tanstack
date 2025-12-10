#!/usr/bin/env node

/**
 * SEO Asset Generator Script
 * This script generates SEO-related assets (robots.txt, sitemap.xml) based on the SEO configuration.
 */

import { writeFileSync, readFileSync } from 'fs';
import { generateRobotsTxt, generateSitemapXml, seoConfig } from '../seo.config.js';

/**
 * Generate and write robots.txt file
 */
function generateRobotsFile() {
  try {
    const robotsContent = generateRobotsTxt(seoConfig);
    writeFileSync('public/robots.txt', robotsContent);
    console.log('✅ robots.txt generated successfully');
  } catch (error) {
    console.error('❌ Error generating robots.txt:', error);
  }
}

/**
 * Generate and write sitemap.xml file
 */
function generateSitemapFile() {
  try {
    // For now, we'll use a simple sitemap with just the home page
    // In a real application, you would pass your routes here
    const sitemapContent = generateSitemapXml(seoConfig, []);
    writeFileSync('public/sitemap.xml', sitemapContent);
    console.log('✅ sitemap.xml generated successfully');
  } catch (error) {
    console.error('❌ Error generating sitemap.xml:', error);
  }
}

/**
 * Validate existing SEO assets
 */
function validateSeoAssets() {
  try {
    // Check if robots.txt exists and is valid
    const robotsContent = readFileSync('public/robots.txt', 'utf-8');
    if (!robotsContent.includes('Sitemap:')) {
      console.warn('⚠️  robots.txt is missing sitemap reference');
    }

    // Check if sitemap.xml exists and is valid
    const sitemapContent = readFileSync('public/sitemap.xml', 'utf-8');
    if (!sitemapContent.includes('urlset')) {
      console.warn('⚠️  sitemap.xml has invalid format');
    }

    console.log('✅ SEO assets validation completed');
  } catch (error) {
    console.error('❌ Error validating SEO assets:', error);
  }
}

/**
 * Main function to generate all SEO assets
 */
function generateAllSeoAssets() {
  console.log('🚀 Starting SEO asset generation...');

  generateRobotsFile();
  generateSitemapFile();
  validateSeoAssets();

  console.log('🎉 SEO asset generation completed!');
}

// Run the script
generateAllSeoAssets();