import React from "react";
function NewsLetter() {

    const handleSubmit=(e)=>{
        e.preventDefault();

    }

  return (
    <div className="text-center">
      <p className="font-semibold text-2xl">
        Subscribe to our weekkly newsletter!
      </p>
      <p>Get tips, insights, discounts and more every week</p>

      <form
        action="" onSubmit={handleSubmit}
        className="w-full sm:w-3/4 flex items-center gap-4 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button type="submit" className="bg-black text-white text-xs px-6 py-4">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
