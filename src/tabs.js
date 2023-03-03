/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
const tabs = [
  { name: "Node stats", id: "stats", href: "#", current: false },

  { name: "Twins", id: "twins", href: "#", current: true },
  { name: "Priority", id: "prior", href: "#", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ active, setActive }) {
  return (
    <div>
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActive(tab.id)}
              className={classNames(
                tab.id === active
                  ? "bg-indigo-100 text-purple-700"
                  : "text-gray-500 hover:text-gray-700",
                "px-3 py-2 font-medium text-sm rounded-md"
              )}
              aria-current={tab.id === active ? "page" : undefined}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
