import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState(true);
  const inputChange = (event) => {
    setState(event.target.value === "monthly");
  };
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#EEF5FF]">
      <div className="flex h-[700px] w-[] rounded-xl bg-white shadow-lg">
        <div className="mb-6 ml-6 mt-6 flex w-[400px] flex-col gap-y-7 rounded-xl bg-blue-700 p-10">
          <div
            onClick={() => toggleTab(1)}
            className="justify-left flex cursor-pointer items-center gap-5"
          >
            <div
              className={`${
                toggle === 1
                  ? "flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF5FF] p-[21.6px] text-[20px] font-medium text-blue-900"
                  : "flex h-6 w-6 items-center justify-center rounded-full border-2  border-white p-5 text-[20px] font-medium text-white"
              }`}
            >
              1
            </div>
            <div>
              <h4 className="text-gray-400">STEP 1</h4>
              <p className="font-semibold text-white">YOUR INFO</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(2)}
            className="justify-left flex cursor-pointer items-center gap-5"
          >
            <div
              className={`${
                toggle === 2
                  ? "flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF5FF] p-[21px] text-[20px] font-medium text-blue-900"
                  : "flex h-6 w-6 items-center justify-center rounded-full  border-2 border-white p-5 text-[20px] font-medium text-white"
              }`}
            >
              2
            </div>
            <div>
              <h4 className="text-gray-400">STEP 2</h4>
              <p className="font-semibold text-white">SELECT PLAN</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(3)}
            className="justify-left flex cursor-pointer items-center gap-5"
          >
            <div
              className={`${
                toggle === 3
                  ? "flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF5FF] p-[21px] text-[20px] font-medium text-blue-900"
                  : "flex h-6 w-6 items-center justify-center rounded-full border-2  border-white p-5 text-[20px] font-medium text-white"
              }`}
            >
              3
            </div>
            <div>
              <h4 className="text-gray-400">STEP 3</h4>
              <p className="font-semibold text-white">ADD-ONS</p>
            </div>
          </div>
          <div
            onClick={() => toggleTab(4)}
            className="justify-left flex cursor-pointer items-center gap-5"
          >
            <div
              className={`${
                toggle === 4
                  ? "flex h-6 w-6 items-center justify-center rounded-full bg-[#EEF5FF] p-[21px] text-[20px] font-medium text-blue-900"
                  : "flex h-6 w-6 items-center justify-center rounded-full border-2 border-white p-5 text-[20px] font-medium text-white"
              }`}
            >
              4
            </div>
            <div>
              <h4 className="text-gray-400">STEP 4</h4>
              <p className="font-semibold text-white">SUMMARY</p>
            </div>
          </div>
        </div>
        <div className="relative h-[100%] w-[90%]">
          <div className={toggle === 1 ? "show-content" : "content"}>
            <div className="m-16">
              <h1 className="mb-1 text-4xl font-bold text-blue-950">
                Personal info
              </h1>
              <p className="mb-8 text-gray-400">
                Please provide your name, email adress, and phone number.
              </p>
              <form className="mb-5 flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 font-semibold text-blue-950"
                >
                  Name
                </label>
                <input
                  className="h-12 rounded-xl border border-gray-400 p-4 font-semibold text-blue-950 outline-[blueviolet]"
                  type="text"
                  placeholder="e.g.Stephen King"
                />
              </form>
              <form className="mb-5 flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-semibold text-blue-950"
                >
                  Email Adress
                </label>
                <input
                  className="h-12 rounded-xl border border-gray-400 p-4 font-semibold text-blue-950 outline-[blueviolet]"
                  type="email"
                  placeholder="e.g.stephenking@lorem.com"
                />
              </form>
              <form className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-semibold text-blue-950"
                >
                  Phone Number
                </label>
                <input
                  className="h-12 rounded-xl border border-gray-400 p-4 font-semibold text-blue-950 outline-[blueviolet]"
                  type="tel"
                  placeholder="e.g.+1 234 567 890"
                />
              </form>
              <button
                onClick={() => toggleTab(2)}
                className="absolute bottom-7 right-16 rounded-xl bg-blue-900  px-6 py-3 font-semibold text-white"
              >
                Next Step
              </button>
            </div>
          </div>
          <div className={toggle === 2 ? "show-content" : "content"}>
            <div className="m-16">
              <h1 className="mb-1 text-4xl font-bold text-blue-950">
                Select your plan
              </h1>
              <p className="mb-10 text-gray-400">
                You have the option of monthly or yearly billing.
              </p>
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="rounded-xl border-2 border-gray-200 p-4 hover:border-[blueviolet]">
                  <div className="mb-12 h-10 w-10 rounded-full bg-orange-400"></div>
                  <p className="text-lg font-semibold text-blue-950">Arcade</p>
                  <p className="text-gray-400">$9/mo</p>
                </div>
                <div className="rounded-xl border-2 border-gray-200 p-4 hover:border-[blueviolet]">
                  <div className="mb-12 h-10 w-10 rounded-full bg-red-400"></div>
                  <p className="text-lg font-semibold text-blue-950">
                    Advanced
                  </p>
                  <p className="text-gray-400">$12/mo</p>
                </div>
                <div className="rounded-xl border-2 border-gray-200 p-4 hover:border-[blueviolet]">
                  <div className="mb-12 h-10 w-10 rounded-full bg-blue-700"></div>
                  <p className="text-lg font-semibold text-blue-950">Pro</p>
                  <p className="text-gray-400">$15/mo</p>
                </div>
              </div>
              <div className="flex h-10 items-center justify-center gap-8 rounded-xl bg-[#F6F7FC]">
                <label className="font-semibold text-blue-950">
                  <input
                    type="radio"
                    name="billingCycle"
                    value="monthly"
                    checked={setState}
                    onChange={inputChange}
                  />
                  Monthly
                </label>
                <label className="font-semibold text-blue-950">
                  <input
                    type="radio"
                    name="billingCycle"
                    value="yearly"
                    checked={!setState}
                    onChange={inputChange}
                  />
                  Yearly
                </label>
              </div>
              <div className="flex">
                <button
                  onClick={() => toggleTab(1)}
                  className=" absolute bottom-7 left-16 rounded-xl px-6 py-3 font-semibold  text-black outline-none hover:text-blue-950"
                >
                  Go Back
                </button>
                <button
                  onClick={() => toggleTab(3)}
                  className="absolute bottom-7 right-16 rounded-xl bg-blue-900  px-6 py-3 font-semibold text-white"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
          <div className={toggle === 3 ? "show-content" : "content"}>
            <div className="mx-20 my-16">
              <h1 className="mb-1 text-4xl font-bold text-blue-950">
                Pick add-ons
              </h1>
              <p className="mb-10 text-gray-400">
                Add-ons help enhance your gaming experience
              </p>
              <div className="flex flex-col gap-y-5">
                <div className="flex w-full items-center justify-between rounded-xl border-2 border-[blueviolet] bg-[#F8F9FE] p-4">
                  <div className="flex items-center gap-5">
                    <input className="h-5 w-5 cursor-pointer" type="checkbox" />
                    <div>
                      <p className="text-xl font-bold text-blue-950">
                        Online service
                      </p>
                      <p className="font-semibold text-gray-400">
                        Access to multiplayer games
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-[blueviolet]">
                    +$1/mo
                  </span>
                </div>
                <div className="flex w-full items-center justify-between rounded-xl border-2 border-[blueviolet] bg-[#F8F9FE] p-4">
                  <div className="flex items-center gap-5">
                    <input className="h-5 w-5 cursor-pointer" type="checkbox" />
                    <div>
                      <p className="text-xl font-bold text-blue-950">
                        Online service
                      </p>
                      <p className="font-semibold text-gray-400">
                        Access to multiplayer games
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-[blueviolet]">
                    +$1/mo
                  </span>
                </div>
                <div className="flex w-full items-center justify-between rounded-xl border-2 border-[blueviolet] bg-[#F8F9FE] p-4">
                  <div className="flex items-center gap-5">
                    <input className="h-5 w-5 cursor-pointer" type="checkbox" />
                    <div>
                      <p className="text-xl font-bold text-blue-950">
                        Online service
                      </p>
                      <p className="font-semibold text-gray-400">
                        Access to multiplayer games
                      </p>
                    </div>
                  </div>
                  <span className="font-semibold text-[blueviolet]">
                    +$1/mo
                  </span>
                </div>
              </div>
              <div className="flex">
                <button
                  onClick={() => toggleTab(2)}
                  className=" absolute bottom-7 left-16 rounded-xl px-6 py-3 font-semibold  text-black outline-none hover:text-blue-950"
                >
                  Go Back
                </button>
                <button
                  onClick={() => toggleTab(4)}
                  className="absolute bottom-7 right-16 rounded-xl bg-blue-900  px-6 py-3 font-semibold text-white"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
          <div className={toggle === 4 ? "show-content" : "content"}>
            <div className="mx-20 my-16">
              <h1 className="mb-1 text-4xl font-bold text-blue-950">
                Finishing up
              </h1>
              <p className="mb-8 text-gray-400">
                Double check everything looks OK before confirming.
              </p>
              <div className="mb-5 rounded-xl bg-[#F8F9FE] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xl font-semibold text-blue-950">
                      Arcade(Monthly)
                    </p>
                    <p className="text-[blueviolet]">Change</p>
                  </div>
                  <span className="font-bold text-blue-950">$9/mo</span>
                </div>
                <hr className="mb-4" />
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-gray-400">Online service</p>
                  <span className="font-medium text-blue-950">+$1/mo</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400">Larger storage</p>
                  <span className="font-medium text-blue-950">+$2/mo</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="mx-3 text-gray-400">Total(per month)</p>
                <span className="text-3xl font-semibold text-[blueviolet]">
                  +$12/mo
                </span>
              </div>

              <div className="flex">
                <button
                  onClick={() => toggleTab(3)}
                  className=" absolute bottom-7 left-16 rounded-xl px-6 py-3 font-semibold  text-black outline-none hover:text-blue-950"
                >
                  Go Back
                </button>
                <button
                  onClick={() => toggleTab(5)}
                  className="absolute bottom-7 right-16 rounded-xl bg-blue-900  px-6 py-3 font-semibold text-white"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
          <div className={toggle === 5 ? "show-content" : "content"}>
            <div className="mx-20 my-16 flex flex-col items-center justify-center">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-400 p-5">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-white p-5">
                  ✔
                </div>
              </div>
              <h3 className="mb-5 text-4xl font-bold text-blue-950">
                Thank you!
              </h3>
              <p className="text-gray-400 font-medium text-center">
                Thanks for confirming your subscribtion! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
