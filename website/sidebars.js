/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  docs: {
    "Getting Started": [
        "introduction",
        "deploy",
        "installation",
        "project-init",
        "inputs",
        "running-your-code",
        "creating-and-viewing-outputs-files",
        "computing-quantitative-metrics",
        "specifying-configurations",
    ],
    "Guides": [
        "visualizations",
        "batches-running-on-multiple-inputs",
        "using-the-qa-cli",
        "references-and-milestones",
        "tuning-from-the-webapp",
        {
            type: 'category',
            label: 'Distributed Task Queues',
            items: [
                "local-multiprocessing",
                "celery-integration",
                "lsf-integration",
                "jenkins-integration",
            ],
        },
        {
            type: 'category',
            label: 'Storage & Artifacts',
            items: [
                "storage/where-is-the-data",
                "storage/artifacts",
                "storage/deleting-old-data",
            ],
        },
        "triggering-third-party-tools",
        "ci-integration",
        "debugging-runs-with-an-IDE",
        "metadata-integration-external-databases",
        "apis",
        "tuning-workflows",
        "dag-pipelines",
        "bit-accuracy",
        "faq",
        // "history"
        // "monorepos-subprojects",
        // "docker-integration",
        // "remote-platforms",
    ],
    // "Parameter Tuning": [
    // 	"Tuning Workflows",
    // 	"Enabling Tuning from QA-Board", // Save artifacts..
    // 	"Tuning runners", // setup LSF and != LSF///
    //   "Auto-Tuning"
    // ],
    //      ""
    //   "Admin Guides": [
    // 	  "starting-server",
    // 	  "server-maintenance"
    //   ]
    // "alternatives",
    "Backend Admin": [
        "backend-admin/troubleshooting",
        "backend-admin/host-upgrades",
    ]
  }
};

module.exports = sidebars;
