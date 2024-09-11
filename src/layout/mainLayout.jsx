import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
  } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Input } from "@/components/ui/input"
  import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
  import { Link, Outlet, useNavigate } from "react-router-dom"
  import { logout, selectUser } from "@/slices/authSlice"
  import { useDispatch, useSelector } from "react-redux"
  import { useEffect } from "react"
  import { useLocation } from 'react-router-dom';
  import { toast } from "@/components/ui/use-toast"
  import { Toaster } from "@/components/ui/toaster"
  
  
  export default function DashboardLayout() {
  
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector(selectUser);
    const path = location.pathname;
  
    useEffect(()=>{
      if(!userInfo && path!='/'){
        navigate('/user/sign-in', {replace:true});
      }
    },[navigate,userInfo,path]);
  
  
    const handleLogout = ()=>{
      dispatch(logout());
      toast({
        title:"Logout Successfully."
      });
    }
  
    return (
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-muted/40 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link to="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">Dashboard</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <Link
                  to="/"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${path === '/' ? 'text-primary' : 'text-muted-foreground'
                  }`}              >
                  <Home className="h-4 w-4" />
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${path === '/dashboard' ? 'text-primary' : 'text-muted-foreground'
                  }`}              >
                 <LineChart className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/items"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${path === '/dashboard/items' ? 'text-primary' : 'text-muted-foreground'
                  }`}              >
                  <Package className="h-4 w-4" />
                  Items{" "}
                </Link>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support
                    team.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <Link
                    to="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Package2 className="h-6 w-6" />
                    <span className="sr-only">Dashboard</span>
                  </Link>
                  <Link
                    to="/"
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${path === '/' ? 'text-primary' : 'text-muted-foreground'
                      }`}
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
  
                  <Link
                    to="/dashboard"
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${path === '/dashboard' ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <LineChart className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard/items"
                    className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground ${path === '/dashboard/items' ? 'text-primary' : 'text-muted-foreground'
                    }`}                >
                    <Package className="h-5 w-5" />
                    Items
                  </Link>
                </nav>
                <div className="mt-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle>Upgrade to Pro</CardTitle>
                      <CardDescription>
                        Unlock all features and get unlimited access to our
                        support team.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm" className="w-full">
                        Upgrade
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </SheetContent>
            </Sheet>
            <div className="w-full flex-1">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {
                  userInfo ? <>
                    <DropdownMenuLabel>{userInfo?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Button className="w-max" onClick={()=>handleLogout()}>
                        Logout
                      </Button>
                    </DropdownMenuItem>
                  </> :
                    <>
                      <Link to={'/user/sign-in'}>
                        <DropdownMenuItem>
                          Login
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuSeparator />
                      <Link to={'/user/sign-up'}>
                        <DropdownMenuItem>
                          Register
                        </DropdownMenuItem>
                      </Link>
                    </>
                }
  
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <Outlet />
          <Toaster />
        </div>
      </div>
    )
  }
  