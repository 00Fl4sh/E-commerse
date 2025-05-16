import React from "react";

const Cart = () => {
  return (
    <div>
      <div className="grid min-h-screen items-start gap-4 lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border-b px-6"></div>
            <div className="flex-1 overflow-auto py-2"></div>
            <div className="mt-auto p-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="p-6"></div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col">
                </div> */}
          <main className="p-4 md:p-6">
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Product"
                  width="150"
                  height="150"
                  className="aspect-square rounded-md object-cover border dark:border-gray-800"
                  />
                <div className="grid gap-2">
                  <div className="font-semibold">Acme Circles T-Shirt</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    #SKU123456
                  </div>
                  <div className="font-semibold">$99</div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                    Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-4 mt-8">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-base"
                    for="coupon"
                    >
                    Coupon code (optional)
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="coupon"
                    placeholder="Enter coupon code"
                    />
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3">
                  Apply coupon
                </button>
              </form>
            </div>
          </main>
        </div>
                    </div>
      </div>
    </div>
  );
};

export default Cart;
