import * as React from "react";
import { sp, Web } from "@pnp/sp/presets/all";
import "@pnp/sp/webs";
import {
  DefaultButton,
  Spinner,
  SpinnerSize,
  TextField,
} from "@fluentui/react";
import "@pnp/sp/navigation";
import Loader from "./Loader";

const MainComponent = (props) => {
  const [value, setValue] = React.useState("");
  const [isLoader, setIsLoader] = React.useState<boolean>(false);

  //   const subsiteCreationInfo: WebCreationInformation = {
  //     Title: "Subsite Title",
  //     Url: "subsite-url",
  //     WebTemplate: "STS#0", // Use the appropriate template
  //   };
  const pageurl = props.context.pageContext.web.absoluteUrl;
  const sitePages = [
    {
      Title: "Release Information",
      PageType: "Article",
      PageTitle: "Release Information",
    },
    { Title: "Release Notes", PageType: "Article", PageTitle: "Release Notes" },
    {
      Title: "PA Features Mapping For Release V1.4.0",
      PageType: "Article",
      PageTitle: "PA Features Mapping For Release V1.4.0",
    },
    {
      Title: "Supported Platforms",
      PageType: "Article",
      PageTitle: "Supported Platforms",
    },
    {
      Title: "Arch & Design ",
      PageType: "Article",
      PageTitle: "Arch & Design",
    },
    {
      Title: "Cloud Architecture",
      PageType: "Article",
      PageTitle: "Cloud Architecture",
    },
    {
      Title: "Overall Architecture",
      PageType: "Article",
      PageTitle: "Overall Architecture",
    },
    {
      Title: "High Availability",
      PageType: "Article",
      PageTitle: "High Availability",
    },
    {
      Title: "Alerting and Monitoring",
      PageType: "Article",
      PageTitle: "Alerting and Monitoring",
    },
    { Title: "Logging ", PageType: "Article", PageTitle: "Logging" },
    {
      Title: "On Premise Architecture",
      PageType: "Article",
      PageTitle: "On Premise Architecture",
    },

    {
      Title: "Overall Architecture",
      PageType: "Article",
      PageTitle: "Overall Architecture",
    },
    {
      Title: "High Availability",
      PageType: "Article",
      PageTitle: "High Availability",
    },
    {
      Title: "Alerting and Monitoring",
      PageType: "Article",
      PageTitle: "Alerting and Monitoring",
    },
    { Title: "Logging ", PageType: "Article", PageTitle: "Logging" },
    {
      Title: "CTI Integrations",
      PageType: "Article",
      PageTitle: "CTI Integrations",
    },
    {
      Title: "Error codes / Disposition codes",
      PageType: "Article",
      PageTitle: "Error codes / Disposition codes",
    },
    {
      Title: "Database design",
      PageType: "Article",
      PageTitle: "Database design",
    },
    {
      Title: " API Sawgger documentation",
      PageType: "Article",
      PageTitle: "API Sawgger documentation",
    },
    {
      Title: "Session API documentation",
      PageType: "Article",
      PageTitle: "Session API documentation",
    },
    {
      Title: "Receive Communication Documentation",
      PageType: "Article",
      PageTitle: "Receive Communication Documentation",
    },
    { Title: "Deployment", PageType: "Article", PageTitle: "Deployment" },
    {
      Title: "Cloud Deployment",
      PageType: "Article",
      PageTitle: "Cloud Deployment",
    },
    {
      Title: "CDK Scripts",
      PageType: "Article",
      PageTitle: "CDK Deployment in AWS",
    },
    {
      Title: "PM2 Install - Patient Assist",
      PageType: "Article",
      PageTitle: "PM2 Install - Patient Assist",
    },
    {
      Title: "On Premise Deployment",
      PageType: "Article",
      PageTitle: "On Premise Deployment",
    },
    {
      Title: "Redhat install",
      PageType: "Article",
      PageTitle: "Redhat install",
    },
    {
      Title: "Ubuntu Install",
      PageType: "Article",
      PageTitle: "Ubuntu Install",
    },
    {
      Title: "Windows Install",
      PageType: "Article",
      PageTitle: " Windows Install",
    },
    {
      Title: "Cisco Finesse Install",
      PageType: "Article",
      PageTitle: "Cisco Finesse Install",
    },
    {
      Title: "Configuration",
      PageType: "Article",
      PageTitle: "Configuration",
    },
    {
      Title: "Mirth Configuration",
      PageType: "Article",
      PageTitle: "Mirth Configuration",
    },
    {
      Title: "Settings file",
      PageType: "Article",
      PageTitle: "Settings file",
    },
    {
      Title: "nginx configuration",
      PageType: "Article",
      PageTitle: "nginx configuration",
    },
    {
      Title: "DB configuration",
      PageType: "Article",
      PageTitle: "DB configuration",
    },
    {
      Title: "Alerting and Monitoring setup",
      PageType: "Article",
      PageTitle: "Alerting and Monitoring setup",
    },
    {
      Title: "Data Migration",
      PageType: "Article",
      PageTitle: "Data Migration",
    },
    {
      Title: "Provider data migraiton",
      PageType: "Article",
      PageTitle: "Provider data migraiton",
    },
    {
      Title: "Calling Destination migration",
      PageType: "Article",
      PageTitle: "Calling Destination migration",
    },
    {
      Title: "Support and Troubleshooting",
      PageType: "Article",
      PageTitle: "Support and Troubleshooting",
    },
    {
      Title: "Troubleshooting guide",
      PageType: "Article",
      PageTitle: "Troubleshooting guide",
    },
    {
      Title: "API mapping",
      PageType: "Article",
      PageTitle: "API mapping",
    },
    {
      Title: "Error Codes and Disposition codes",
      PageType: "Article",
      PageTitle: "Error Codes and Disposition codes",
    },
    { Title: "FAQs    ", PageType: "Article", PageTitle: "FAQs" },
    {
      Title: "Common Epic APIs",
      PageType: "Article",
      PageTitle: "Common Epic APIs",
    },
  ];

  const SubsiteCreate = async () => {
    // Replace these values with your actual site URL and subsite details
    let x = "https://chandrudemo.sharepoint.com/sites/CreateReleaseAutomation";
    const siteUrl = props.context.pageContext.web.absoluteUrl;
    const subsiteUrl = value;
    const subsiteTitle = value;
    const subsiteDescription = "Description for the new subsite";
    const WebTemplate = "STS#0";
    if (value.trim() != "") {
      try {
        const web = Web(siteUrl);

        // Create subsite using the REST API
        await sp.web.webs
          .add(subsiteTitle, subsiteUrl, subsiteDescription, WebTemplate)
          .then((res) => {
            createSitePages();
          })
          .catch((err) => console.log(err));

        console.log("Subsite created successfully.");
      } catch (error) {
        console.error("Error creating subsite:", error);
      }
    } else {
      setIsLoader(false);
      return;
    }
  };

  //site page
  const createSitePages = async () => {
    const xweb = props.context.pageContext.web.absoluteUrl + "/" + value;
    console.log(xweb, "siteurl");
    const xxweb = Web(xweb);

    for (let i: number = 0; sitePages.length > i; i++) {
      debugger;
      const result = await xxweb.addClientsidePage(
        sitePages[i].Title,
        sitePages[i].PageTitle,
        "Article"
      );

      await result
        .save()
        .then((_res) => {
          console.log("siteres", _res);

          if (sitePages.length === i + 1) {
            createNavigationTree();
          }
        })
        .catch((err: any) => {
          console.log("err > ", err);
        });
    }
  };

  //navigation

  const navigationItems = [
    {
      title: "Release Information",
      //   url: "/sites/POCforLeftNav/Test001/SitePages/Test.aspx",
      //   url: `/sites/CreateReleaseAutomation/${value}/SitePages/Release-Information.aspx`,
      url: `${pageurl}/${value}/SitePages/Release-Information.aspx`,
      // url: "/sites/POCforLeftNav/Test001/SitePages/Test.aspx",
      isExternal: false,
      sequence: 1,
      children: [
        {
          title: "Release Notes",
          url: `${pageurl}/${value}/SitePages/Release-Notes.aspx`,
          isExternal: false,
          sequence: 1,
          children: [
            {
              title: "PA Features Mapping For Release V1.4.0",
              url: `${pageurl}/${value}/SitePages/PA-Features-Mapping-For-Release-V1.4.0.aspx`,
              isExternal: false,
              sequence: 1,
              children: [],
            },
          ],
        },
        {
          title: "Supported Platforms",
          url: `${pageurl}/${value}/SitePages/Supported-Platforms.aspx`,
          isExternal: false,
          sequence: 2,
          children: [],
        },
        // {
        //   title: "Test2",
        //   url: "/sites/POCforLeftNav/Test001/SitePages/Test2.aspx",
        //   isExternal: false,
        //   sequence: 2,
        //   children: [],
        // },
      ],
    },
    {
      title: "Arch & Design",
      url: `${pageurl}/${value}/SitePages/Arch-&-Design.aspx`,
      //   url: "/sites/POCforLeftNav/Test001/SitePages/Test.aspx",
      isExternal: false,
      sequence: 1,
      children: [
        {
          title: "Cloud Architectur",
          url: `${pageurl}/${value}/SitePages/Cloud-Architecture.aspx`,
          isExternal: false,
          sequence: 1,
          children: [
            {
              title: "1.Overall Architecture",
              url: `${pageurl}/${value}/SitePages/Overall-Architecture.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "2.High Availability",
              url: `${pageurl}/${value}/SitePages/High-Availability.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "3.Alerting and Monitoring",
              url: `${pageurl}/${value}/SitePages/Alerting-and-Monitoring.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "4.Logging",
              url: `${pageurl}/${value}/SitePages/Logging.aspx`,
              isExternal: false,
              sequence: 1,
            },
          ],
        },
        {
          title: "On Premise Architecture",
          url: `${pageurl}/${value}/SitePages/On-Premise-Architecture.aspx`,
          isExternal: false,
          sequence: 2,
          children: [
            {
              title: "1.Overall Architecture",
              url: `${pageurl}/${value}/SitePages/Overall-Architecture(1).aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "2.High Availability",
              url: `${pageurl}/${value}/SitePages/High-Availability(1).aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "3.Alerting and Monitoring",
              url: `${pageurl}/${value}/SitePages/Alerting-and-Monitoring(1).aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "4.Logging",
              url: `${pageurl}/${value}/SitePages/Logging(1).aspx`,
              isExternal: false,
              sequence: 1,
            },
          ],
        },
        {
          title: "CTI Integrations",
          url: `${pageurl}/${value}/SitePages/CTI-Integrations.aspx`,
          isExternal: false,
          sequence: 2,
          children: [
            {
              title: "Error codes / Disposition codes",
              url: `${pageurl}/${value}/SitePages/Error-codes---Disposition-codes.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Database design",
              url: `${pageurl}/${value}/SitePages/Database-design.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "API Sawgger documentation",
              url: `${pageurl}/${value}/SitePages/API-Sawgger-documentation.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Session API documentation",
              url: `${pageurl}/${value}/SitePages/Session-API-documentation.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Receive Communication Documentation",
              url: `${pageurl}/${value}/SitePages/Receive-Communication-Documentation.aspx`,
              isExternal: false,
              sequence: 1,
            },
          ],
        },
      ],
    },
    {
      title: "Deployment",
      url: `${pageurl}/${value}/SitePages/Deployment.aspx`,
      //   url: "/sites/POCforLeftNav/Test001/SitePages/Test.aspx",
      isExternal: false,
      sequence: 1,
      children: [
        {
          title: "Cloud Deployment",
          url: `${pageurl}/${value}/SitePages/Cloud-Deployment.aspx`,
          isExternal: false,
          sequence: 1,
          children: [
            {
              title: "CDK Scripts",
              url: `${pageurl}/${value}/SitePages/CDK-Scripts.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "PM2 Install - Patient Assist",
              url: `${pageurl}/${value}/SitePages/PM2-Install---Patient-Assist.aspx`,
              isExternal: false,
              sequence: 1,
            },
            // {
            //   title: "3.Alerting and Monitoring",
            //   url: "/sites/POCforLeftNav/Test001/SitePages/Alerting-and-Monitoring.aspx",
            //   isExternal: false,
            //   sequence: 1,
            // },
            // {
            //   title: "Logging",
            //   url: "/sites/POCforLeftNav/Test001/SitePages/Logging.aspx",
            //   isExternal: false,
            //   sequence: 1,
            // },
          ],
        },
        {
          title: "On Premise Deployment",
          url: `${pageurl}/${value}/SitePages/On-Premise-Deployment.aspx`,
          isExternal: false,
          sequence: 2,
          children: [
            {
              title: "Redhat install",
              url: `${pageurl}/${value}/SitePages/Redhat-install.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Ubuntu Install",
              url: `${pageurl}/${value}/SitePages/Ubuntu-Install.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Windows Install",
              url: `${pageurl}/${value}/SitePages/Windows-Install.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Cisco Finesse Install",
              url: `${pageurl}/${value}/SitePages/Cisco-Finesse-Install.aspx`,
              isExternal: false,
              sequence: 1,
            },
          ],
        },
        {
          title: "Configuration",
          url: `${pageurl}/${value}/SitePages/Configuration.aspx`,
          isExternal: false,
          sequence: 2,
          children: [
            {
              title: "Mirth-Configuration",
              url: `${pageurl}/${value}/SitePages/Mirth-Configuration.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Settings file",
              url: `${pageurl}/${value}/SitePages/Settings-file.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "nginx configuration",
              url: `${pageurl}/${value}/SitePages/nginx-configuration.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "DB configuration",
              url: `${pageurl}/${value}/SitePages/DB-configuration.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Alerting and Monitoring setup",
              url: `${pageurl}/${value}/SitePages/Alerting-and-Monitoring-setup.aspx`,
              isExternal: false,
              sequence: 1,
            },
          ],
        },
        {
          title: "Data Migration",
          url: `${pageurl}/${value}/SitePages/Data-Migration.aspx`,
          isExternal: false,
          sequence: 2,
          children: [
            {
              title: "Provider data migraiton",
              url: `${pageurl}/${value}/SitePages/Provider-data-migraiton.aspx`,
              isExternal: false,
              sequence: 1,
            },
            {
              title: "Calling Destination migration",
              url: `${pageurl}/${value}/SitePages/Calling-Destination-migration.aspx`,
              isExternal: false,
              sequence: 1,
            },
          ],
        },
      ],
    },
    {
      title: "Support and Troubleshooting",
      url: `${pageurl}/${value}/SitePages/Support-and-Troubleshooting.aspx`,
      //   url: "/sites/POCforLeftNav/Test001/SitePages/Test.aspx",
      isExternal: false,
      sequence: 1,
      children: [
        {
          title: "Troubleshooting guide",
          url: `${pageurl}/${value}/SitePages/Troubleshooting-guide.aspx`,
          isExternal: false,
          sequence: 1,
          children: [],
        },
        {
          title: "API mapping",
          url: `${pageurl}/${value}/SitePages/API-mapping.aspx`,
          isExternal: false,
          sequence: 2,
          children: [],
        },
        {
          title: "Error Codes and Disposition codes",
          url: `${pageurl}/${value}/SitePages/Error-Codes-and-Disposition-codes.aspx`,
          isExternal: false,
          sequence: 2,
          children: [],
        },
        {
          title: "FAQs",
          url: `${pageurl}/${value}/SitePages/FAQs.aspx`,
          isExternal: false,
          sequence: 2,
          children: [],
        },
        {
          title: " Common Epic APIs",
          url: `${pageurl}/${value}/SitePages/Common-Epic-APIs.aspx`,
          isExternal: false,
          sequence: 2,
          children: [],
        },
      ],
    },
  ];
  const createNavigationTree = async () => {
    const xweb1 = props.context.pageContext.web.absoluteUrl + "/" + value;
    console.log(xweb1, "siteurl");
    const xxweb = Web(xweb1);
    for (let i: number = 0; navigationItems.length > i; i++) {
      //   await sp.web.navigation.quicklaunch
      await xxweb.navigation.quicklaunch

        .add(navigationItems[i].title, navigationItems[i].url, true)
        .then(async (res: any) => {
          console.log("Master Id > ", res.data.Id);

          for (let j: number = 0; navigationItems[i].children.length > j; j++) {
            // await sp.web.navigation.quicklaunch
            await xxweb.navigation.quicklaunch
              .getById(res.data.Id)
              .children.add(
                navigationItems[i].children[j].title,
                navigationItems[i].children[j].url,
                true
              )
              .then(async (child: any) => {
                console.log("child > ", child);

                for (
                  let k: number = 0;
                  navigationItems[i].children[j].children.length > k;
                  k++
                ) {
                  //   await sp.web.navigation.quicklaunch
                  await xxweb.navigation.quicklaunch
                    .getById(child.data.Id)
                    .children.add(
                      navigationItems[i].children[j].children[k].title,
                      navigationItems[i].children[j].children[k].url,
                      true
                    )
                    .then((subchild: any) => {
                      console.log("subchild > ", subchild);
                    })
                    .catch((errsubchild: any) => {
                      console.log("errsubchild > ", errsubchild);
                    });

                  if (
                    navigationItems[i].children[j].children.length ===
                    k + 1
                  ) {
                    setIsLoader(false);
                  }
                }
              })
              .catch((errChild: any) => {
                console.log("errChild > ", errChild);
              });

            if (navigationItems[i].children.length === j + 1) {
              setIsLoader(false);
            }
          }
        })
        .catch((err: any) => {
          console.log("err > ", err);
        });

      if (navigationItems.length === i + 1) {
        setIsLoader(false);
      }
    }
  };

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div style={{ display: "flex", alignItems: "end", gap: "10px" }}>
          <TextField
            styles={{
              root: {
                width: "90%",
              },
            }}
            label="Subsite Name"
            onChange={(e, val) => setValue(val)}
          ></TextField>
          <DefaultButton
            text="Click"
            onClick={(_) => {
              setIsLoader(true);
              !isLoader && SubsiteCreate();
            }}
          />
        </div>
      )}
    </>
  );
};
export default MainComponent;
