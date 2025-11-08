import React from "react";

export default function DiseasePrevention() {
  return (
    <div className="container-page py-10">
      <div className="grid md:grid-cols-[1fr,320px] gap-8 items-start">
        <div>
          <h1 className="text-3xl font-bold text-purple-700">Disease Prevention</h1>
          <p className="text-gray-700 mt-3 max-w-2xl">
            The following features are currently available in our application
            and in future we will bring more so that it would be more
            beneficial for the whole country.
          </p>

          <div className="mt-5 flex gap-2">
            <input
              type="search"
              placeholder="Search for Diseases"
              className="w-full max-w-xs border rounded-lg px-3 py-2"
            />
            <button className="px-4 py-2 rounded-lg bg-purple-700 text-white">
              Search
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            {["All","Vector-Born","Non-Communicable","Communicable","Environmental"].map((x,i)=>(
              <button
                key={i}
                className={`px-3 py-1.5 rounded-full border ${i===0 ? "bg-green-600 text-white border-green-600":"bg-white"}`}
              >
                {x}
              </button>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl overflow-hidden border">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqmqgGWQq-oxJdaYBskxK9x1pKoMwgTO3pg&s"
                className="w-full h-44 object-cover"
                alt="Malaria"
              />
              <div className="p-4">
                <h3 className="font-semibold">Malaria</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Malaria is a life-threatening disease caused by parasites.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="px-2 py-1 rounded bg-purple-100 text-purple-700">
                    Vector-Born
                  </span>
                  <span className="px-2 py-1 rounded bg-green-600 text-white">
                    More
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-xl overflow-hidden border">
              <img
                src="https://www.fitterfly.com/blog/wp-content/uploads/2021/08/Type-2-Diabetes-Treatment-and-Management.webp"
                className="w-full h-44 object-cover"
                alt="Diabetes"
              />
              <div className="p-4">
                <h3 className="font-semibold">Diabetes</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Diabetes is a group of diseases affecting blood sugar.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="px-2 py-1 rounded bg-purple-100 text-purple-700">
                    Non-Communicable
                  </span>
                  <span className="px-2 py-1 rounded bg-green-600 text-white">
                    More
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-xl overflow-hidden border">
              <img
                src="https://bimcbali.com/wp-content/uploads/2025/06/Travelers-Diarrhea-200x200.jpg"
                className="w-full h-44 object-cover"
                alt="Diarrhoea"
              />
              <div className="p-4">
                <h3 className="font-semibold">Diarrhoea</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Often due to infection of the intestines.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="px-2 py-1 rounded bg-purple-100 text-purple-700">
                    Communicable
                  </span>
                  <span className="px-2 py-1 rounded bg-green-600 text-white">
                    More
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-xl overflow-hidden border">
              <img
                src="https://www.nexles.com/articles/wp-content/uploads/2017/02/Scarlet-Fever-Scarlatina-how-to-get-rid-of.png"
                className="w-full h-44 object-cover"
                alt="Typhoid"
              />
              <div className="p-4">
                <h3 className="font-semibold">Typhoid</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Bacterial infection spread through contaminated food or water.
                </p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="px-2 py-1 rounded bg-purple-100 text-purple-700">
                    Communicable
                  </span>
                  <span className="px-2 py-1 rounded bg-green-600 text-white">
                    More
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSBUIrZg7tUptIgT-GZfUzv-CDQ_SgaJP4Wlp3_XtA2_6WeSomm"
            onError={(e)=>{ e.currentTarget.style.display='none'; }}
            alt="illustration"
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
