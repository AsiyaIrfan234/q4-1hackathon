// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'modules/module-1/chapter-1',
        'modules/module-1/chapter-2',
        'modules/module-1/chapter-3',
      ],
    },
  ],
};

module.exports = sidebars;