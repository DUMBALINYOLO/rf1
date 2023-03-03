/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { id: 0, name: "transformation" },
  { id: 1, name: "scrum" },
  { id: 2, name: "android" },
  { id: 3, name: "java" },
  { id: 4, name: "docker" },
  { id: 5, name: "kubernetes" },
  { id: 6, name: "ansible" },
  { id: 7, name: "jenkins" },
  { id: 8, name: "nagios" },
  { id: 9, name: "puppet" },
  { id: 10, name: "nginx" },
  { id: 11, name: "git" },
  { id: 12, name: "gradle" },
  { id: 13, name: "sass" },
  { id: 14, name: "less" },
  { id: 15, name: "mysql" },
  { id: 16, name: "linux" },
  { id: 17, name: "magento" },
  { id: 18, name: "sql" },
  { id: 19, name: "unix" },
  { id: 20, name: "django" },
  { id: 21, name: "python" },
  { id: 22, name: "angular" },
  { id: 23, name: "flask" },
  { id: 24, name: "c" },
  { id: 25, name: "c#" },
  { id: 26, name: "typescript" },
  { id: 27, name: "javascript" },
  { id: 28, name: "sybase" },
  { id: 29, name: "asp.net" },
  { id: 30, name: "json" },
  { id: 31, name: "nosql" },
  { id: 32, name: "openapi" },
  { id: 33, name: "symfony" },
  { id: 34, name: "php" },
  { id: 35, name: "devops" },
  { id: 36, name: "mise en place" },
  { id: 37, name: "data warehousing" },
  { id: 38, name: "business intelligence" },
  { id: 39, name: "r" },
  { id: 40, name: "robotic process automation" },
  { id: 41, name: "microsoft access" },
  { id: 42, name: "power bi" },
  { id: 43, name: "warehousing" },
  { id: 44, name: "data mining" },
  { id: 45, name: "automation" },
  { id: 46, name: "eyes" },
  { id: 47, name: "aruba" },
  { id: 48, name: "firewall" },
  { id: 49, name: "incident management" },
  { id: 50, name: "nice" },
  { id: 51, name: "resource management" },
  { id: 52, name: "rstudio" },
  { id: 53, name: "flux" },
  { id: 54, name: "hibernate" },
  { id: 55, name: "pl/sql" },
  { id: 56, name: "active directory" },
  { id: 57, name: "technical support" },
  { id: 58, name: "servicenow" },
  { id: 59, name: "sonar" },
  { id: 60, name: "appium" },
  { id: 61, name: "tracking" },
  { id: 62, name: "jira" },
  { id: 63, name: "testcomplete" },
  { id: 64, name: "soapui" },
  { id: 65, name: "responsive web design" },
  { id: 66, name: "web services" },
  { id: 67, name: "jquery" },
  { id: 68, name: "c++" },
  { id: 69, name: "html5" },
  { id: 70, name: "ajax" },
  { id: 71, name: "web design" },
  { id: 72, name: "node.js" },
  { id: 73, name: "wordpress" },
  { id: 74, name: "react native" },
  { id: 75, name: "m" },
  { id: 76, name: "scripting" },
  { id: 77, name: "back end" },
  { id: 78, name: "webforms" },
  { id: 79, name: "front end" },
  { id: 80, name: "splunk" },
  { id: 81, name: "talend" },
  { id: 82, name: "gitlab" },
  { id: 83, name: "google cloud" },
  { id: 84, name: "analytics" },
  { id: 85, name: "big data" },
  { id: 86, name: "sas" },
  { id: 87, name: "spring cloud" },
  { id: 88, name: "apache hadoop" },
  { id: 89, name: "airflow" },
  { id: 90, name: "scala" },
  { id: 91, name: "sqoop" },
  { id: 92, name: "microservices" },
  { id: 93, name: "pilotage" },
  { id: 94, name: "windev" },
  { id: 95, name: "spring webflux" },
  { id: 96, name: "mongodb" },
  { id: 97, name: "java 8" },
  { id: 98, name: "azure blob storage" },
  { id: 99, name: "entity framework" },
  { id: 100, name: "sitecore" },
  { id: 101, name: "azure data factory" },
  { id: 102, name: "robot framework" },
  { id: 103, name: "testlink" },
  { id: 104, name: "selenium" },
  { id: 105, name: "junit" },
  { id: 106, name: "spring security" },
  { id: 107, name: "bitbucket" },
  { id: 108, name: "keycloak" },
  { id: 109, name: "spring boot" },
  { id: 110, name: "jest" },
  { id: 111, name: "kapacitor" },
  { id: 112, name: "influxdb" },
  { id: 113, name: "telegraf" },
  { id: 114, name: "traefik" },
  { id: 115, name: "docker swarm" },
  { id: 116, name: "yaml" },
  { id: 117, name: "prometheus" },
  { id: 118, name: "go" },
  { id: 119, name: "postgresql" },
  { id: 120, name: "grafana" },
  { id: 121, name: "templates" },
  { id: 122, name: "markdown" },
  { id: 123, name: "bootstrap" },
  { id: 124, name: "kotlin" },
  { id: 125, name: "veeam" },
  { id: 126, name: "centos" },
  { id: 127, name: "perl" },
  { id: 128, name: "openshift" },
  { id: 129, name: "devsecops" },
  { id: 130, name: "machine learning" },
  { id: 131, name: "deep learning" },
  { id: 132, name: "powerapps" },
  { id: 133, name: "data science" },
  { id: 134, name: "vertica" },
  { id: 135, name: "postman" },
  { id: 136, name: "hosting" },
  { id: 137, name: "installation" },
  { id: 138, name: "sap hana" },
  { id: 139, name: "qlik sense" },
  { id: 140, name: "tableau" },
  { id: 141, name: "informatica" },
  { id: 142, name: "qlikview" },
  { id: 143, name: "protractor" },
  { id: 144, name: "tcp/ip" },
  { id: 145, name: "load balancing" },
  { id: 146, name: "balancing" },
  { id: 147, name: "radware" },
  { id: 148, name: "visual basic" },
  { id: 149, name: "mariadb" },
  { id: 150, name: "solaris" },
  { id: 151, name: "jonas" },
  { id: 152, name: "mulesoft" },
  { id: 153, name: "eclipse" },
  { id: 154, name: "source" },
  { id: 155, name: "middleware" },
  { id: 156, name: "project management" },
  { id: 157, name: "sendmail" },
  { id: 158, name: "hp-ux" },
  { id: 159, name: "user story" },
  { id: 160, name: "chef" },
  { id: 161, name: "continuous delivery" },
  { id: 162, name: "computer science" },
  { id: 163, name: "remuneration" },
  { id: 164, name: "clonezilla" },
  { id: 165, name: "acronis true image" },
  { id: 166, name: "xgboost" },
  { id: 167, name: "syslog" },
  { id: 168, name: "ip routing" },
  { id: 169, name: "public cloud" },
  { id: 170, name: "cloud infrastructure" },
  { id: 171, name: "time series" },
  { id: 172, name: "object storage" },
  { id: 173, name: "docker container" },
  { id: 174, name: "pytorch" },
  { id: 175, name: "routing protocols" },
  { id: 176, name: "terraform" },
  { id: 177, name: "api gateway" },
  { id: 178, name: "vm" },
  { id: 179, name: "jupyter" },
  { id: 180, name: "telemetry" },
  { id: 181, name: "drupal" },
  { id: 182, name: "avaya" },
  { id: 183, name: "session" },
  { id: 184, name: "signaling" },
  { id: 185, name: "trunking" },
  { id: 186, name: "api management" },
  { id: 187, name: "insurance products" },
  { id: 188, name: "portfolio management" },
  { id: 189, name: "e" },
  { id: 190, name: "customer support" },
  { id: 191, name: "webdev" },
  { id: 192, name: "spring framework" },
  { id: 193, name: "iptables" },
  { id: 194, name: "procurement" },
  { id: 195, name: "process improvements" },
  { id: 196, name: "collaboration tools" },
  { id: 197, name: "bilingual" },
  { id: 198, name: "licensing" },
  { id: 199, name: "wireshark" },
  { id: 200, name: "qmail" },
  { id: 201, name: "hyper-v" },
  { id: 202, name: "smtp" },
  { id: 203, name: "cacti" },
  { id: 204, name: "ghost" },
  { id: 205, name: "postfix" },
  { id: 206, name: "lunix" },
  { id: 207, name: "squid" },
  { id: 208, name: "exim" },
  { id: 209, name: "switch" },
  { id: 210, name: "xamarin" },
  { id: 211, name: "blazor" },
  { id: 212, name: "autodesk" },
  { id: 213, name: "agile methodology" },
  { id: 214, name: "spring mvc" },
  { id: 215, name: "mockito" },
  { id: 216, name: "design flow" },
  { id: 217, name: "surfaceflinger" },
  { id: 218, name: "sqlite" },
  { id: 219, name: "android studio" },
  { id: 220, name: "android sdk" },
  { id: 221, name: "linux kernel" },
  { id: 222, name: "ethernet" },
  { id: 223, name: "lamp" },
  { id: 224, name: "jhipster" },
  { id: 225, name: "sonarqube" },
  { id: 226, name: "cloudfoundry" },
  { id: 227, name: "camunda" },
  { id: 228, name: "cucumber" },
  { id: 229, name: "mapr" },
  { id: 230, name: "e-commerce" },
  { id: 231, name: "vue.js" },
  { id: 232, name: "redis" }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ selected, setSelected }) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm w-56 font-medium text-gray-700">
            Choose skill
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                static
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              >
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
