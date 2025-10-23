import { DonationForm, DonationData } from "./components/DonationForm";
import { Card } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { toast } from "sonner";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const handleDonation = (data: DonationData) => {
    console.log("Donation submitted:", data);
    toast.success("Thank you for your donation!", {
      description: `We've received your ${
        data.isMonthly ? "monthly" : "one-time"
      } donation of $${data.amount}. A confirmation email has been sent to ${
        data.email
      }.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Toaster />

      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-20 w-20 rounded-full border-b flex items-center justify-center">
                <img src="https://wocgive.org/wp-content/uploads/2020/10/Image-4.png"></img>
              </div>
              <div>
                <h1 className="tracking-tight">Women of Color Give</h1>
                <p className="text-muted-foreground">
                  Making a difference together
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Image and Mission */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2>Your Generosity Changes Lives</h2>
                <p className="text-muted-foreground">
                  Women of Color GIVE is a philanthropy circle that has pulled
                  elements of various cultural traditions together to create a
                  space for women of color to connect and leverage resources
                  while supporting each other and the causes that matter to us.
                  Women of Color are underrepresented in major philanthropic
                  circles and as a result, women of color and the causes we care
                  about do not benefit from networks along with the care and
                  attention given to these networks. Women of Color GIVE is
                  helping change the charitable giving landscape by adding more
                  diverse voices to the philanthropy narrative.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-lg">
                <a
                  href="https://www.instagram.com/wocgive/?hl=en"
                  target="_blank"
                >
                  <ImageWithFallback
                    src="https://wocgive.org/wp-content/uploads/2021/08/Group-13-1.png"
                    alt="People helping each other"
                    className="w-full h-[400px] object-cover"
                  />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p>100% of your donation goes directly to those in need</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p>Tax-deductible receipts provided for all donations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p>
                      Secure payment processing with industry-standard
                      encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Donation Form */}
            <div className="lg:sticky lg:top-24">
              <Card className="p-8 shadow-xl">
                <div className="space-y-6">
                  <div className="space-y-2 pb-2 border-b">
                    <h2>Make a Donation</h2>
                    <p className="text-muted-foreground">
                      Your support helps us continue our mission
                    </p>
                  </div>

                  <DonationForm onSubmit={handleDonation} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Hope Foundation. All rights reserved.</p>
            <p className="mt-2">Registered 501(c)(3) Non-Profit Organization</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
