// src/pages/VerifyAge.jsx
import { Button } from "../components/Buttons";
export default function VerifyAge() {
  return (

    // min-h-screen  → makes this div take at least full screen height (100vh)
    // bg-[#1a2e50] → custom dark navy background color ([] lets you use any hex color)
    // flex          → enables flexbox so we can center the child
    // items-center  → centers child vertically (cross axis)
    // justify-center→ centers child horizontally (main axis)
    <div className="min-h-screen bg-[#1a2e50] flex items-center justify-center">

      {/* 
        w-full     → takes full width of parent
        max-w-sm   → but never wider than 384px (keeps the card narrow like the design)
        text-center→ centers all text inside this container
        px-4       → adds 16px padding on left and right (so it doesn't touch screen edges on mobile)
      */}
      <div className="w-full max-w-sm text-center px-4">

        {/* ───────── LOGO SECTION ───────── */}

        {/* 
          flex         → puts icon and text side by side
          items-center → aligns icon and text vertically in the middle
          justify-center→ centers the whole logo group horizontally
          gap-2        → adds 8px space between icon box and the text
          mb-10        → adds 40px margin below the logo (pushes heading down)
        */}
        <div className="flex items-center justify-center gap-2 mb-10">

          {/* 
            bg-teal-400  → teal/cyan background for the icon box
            rounded-md   → slightly rounded corners on the icon box
            p-1          → 4px padding inside the icon box so icon doesn't touch edges
          */}
          <div className="bg-teal-400 rounded-md p-1">

            {/* 
              w-5 h-5        → icon is 20x20px
              text-slate-900 → dark color for the icon (so it shows on teal background)
            */}
            <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6l2 2h4a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
            </svg>
          </div>

          {/* 
            text-teal-400 → matches the icon box color for the brand name
            text-lg       → font size 18px
            font-medium   → font weight 500 (not too bold, not too thin)
          */}
          <span className="text-teal-400 text-md font-medium">Webinar.gg</span>
        </div>

        {/* ───────── HEADING ───────── */}

        {/* 
          text-slate-100 → near-white color (not pure white, slightly soft)
          text-2xl       → font size 24px
          font-medium    → weight 500
          mb-3           → 12px space below heading before the paragraph
        */}
        <h1 className="text-slate-100 text-2xl font-sm mb-3">
          Verify Your Age
        </h1>

        {/* ───────── SUBTEXT ───────── */}

        {/* 
          text-slate-400 → muted gray color, clearly secondary to the heading
          text-sm        → smaller font 14px to show it's supporting text
          mb-6           → 24px gap below before the input starts
        */}
        <p className="text-slate-400 text-sm mb-4">
          Please confirm your birth year. This data will not be stored.
        </p>

        {/* ───────── INPUT FIELD ───────── */}

        {/* 
          w-full              → stretches input to fill the container width
          bg-[#1e3a5f]        → slightly lighter navy than page background, so input is visible
          border              → adds a 1px border (required before you can color it)
          border-slate-600    → dark muted border color matching the dark theme
          rounded-lg          → nicely rounded corners (8px)
          px-4                → 16px left/right padding so text doesn't touch the edge
          py-2.5              → 10px top/bottom padding, gives the input good height
          text-slate-100      → near-white text color for what the user types
          placeholder-slate-500 → darker gray for placeholder text so it's subtle
          outline-none        → removes the browser's default blue focus outline
          focus:border-teal-500 → when user clicks the input, border turns teal (nice UX touch)
          mb-3                → 12px gap between input and button below
        */}
        <input
          type="number"
          placeholder="Your Birth Year"
          className="
            w-full
            bg-[#1e3a5f]
            border border-slate-600
            rounded-lg
            px-4 py-2.5
            text-slate-100
            placeholder-slate-500
            outline-none
            focus:border-teal-500
            mb-3
          "
        />

        {/* ───────── BUTTON ───────── */}

        {/* 
          w-full            → button stretches full width, same as the input above
          bg-[#2d4a6e]      → slightly lighter than input bg, gives button its own identity
          text-slate-300    → muted light text (not bright white — button is inactive-looking by design)
          border            → adds 1px border
          border-slate-600  → same border color as the input, keeps consistency
          rounded-lg        → same rounded corners as input, looks like a matched pair
          px-4 py-2.5       → same padding as input so they're the same height
          hover:bg-[#3a5a80]→ slightly lighter background when user hovers over button
          transition-colors → smoothly animates the color change on hover (not an instant jump)
          cursor-pointer    → shows hand cursor on hover so user knows it's clickable
        */}
        <Button disable = {false}>
            <Continue></Continue>
          
        </Button>

      </div>
    </div>
  );
}