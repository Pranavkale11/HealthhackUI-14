import React from "react";
import { Link } from "react-router-dom";

export default function FeaturesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-700">Our Features</h2>
      <p className="text-gray-700 max-w-2xl mt-3">
        The following features are currently available in our application.
        In the future we will bring more features so that it would be more
        beneficial for the whole country.
      </p>

      <div className="mt-8 mb-10 flex justify-end">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-nurse-cartoon-illustration_23-2150715783.jpg"
          alt="features illustration"
          className="w-48 md:w-56"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Disease Prevention */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden border">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlPpU3dntP-QwH5xawmtJ6YYAhOzpD4eSEVO-MwNb_8SPsgXdk"
            className="w-full h-48 object-cover"
            alt=""
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Disease Prevention</h3>
            <p className="text-sm text-gray-600 mt-1">
              This section includes details about how to prevent diseases.
            </p>
            <Link
              to="/prevention"
              className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Explore →
            </Link>
          </div>
        </div>

        {/* Emergency Aid */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden border">
          <img
            src="https://cbassociatetraining.co.uk/wp-content/uploads/2021/10/cbat-post-featured-emergency-first-aid-kit.jpeg"
            className="w-full h-48 object-cover"
            alt=""
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Emergency Aid</h3>
            <p className="text-sm text-gray-600 mt-1">
              Learn how to act in emergency situations.
            </p>
            <Link
              to="/emergency"
              className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Explore →
            </Link>
          </div>
        </div>

        {/* Health Schemes */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden border">
          <img
            src="https://www.reuters.com/resizer/v2/https%3A%2F%2Farchive-images.prod.global.a201836.reutersmedia.net%2F2014%2F07%2F31%2FLYNXMPEA6U0EI.JPG?auth=baafbdc94f0e7e286b5de2a4d22fe3ef0bb40c4d9602ad3b6e2413c4433c0a45&width=720&quality=80"
            className="w-full h-48 object-cover"
            alt=""
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">Health Schemes</h3>
            <p className="text-sm text-gray-600 mt-1">
              Includes government-backed health schemes.
            </p>
            <Link
              to="/schemes"
              className="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
            >
              Explore →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
