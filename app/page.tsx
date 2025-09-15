"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Sun, Droplets, Heart, Phone, Mail, MapPin, Award, Users, Sprout, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Organic Farming",
      description: "100% organic produce grown with sustainable farming practices and natural fertilizers"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Fresh Vegetables",
      description: "Daily harvest of seasonal vegetables, delivered fresh from our fields to your table"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Sustainable Irrigation",
      description: "Advanced water management systems ensuring optimal crop growth while conserving resources"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Farm-to-Table",
      description: "Direct supply chain ensuring the freshest produce reaches you within hours of harvest"
    }
  ];

  const products = [
    {
      name: "Organic Tomatoes",
      description: "Vine-ripened, pesticide-free tomatoes",
      image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Fresh Leafy Greens",
      description: "Spinach, lettuce, and seasonal greens",
      image: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Root Vegetables",
      description: "Carrots, radishes, and beetroot",
      image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Herbs & Spices",
      description: "Fresh basil, cilantro, and mint",
      image: "https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      content: "The quality of vegetables from Eyal Vanam is exceptional. You can taste the difference!",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Restaurant Owner",
      content: "We've been sourcing from Eyal Vanam for 2 years. Their consistency and quality is unmatched.",
      rating: 5
    },
    {
      name: "Meera Patel",
      role: "Health Enthusiast",
      content: "Knowing my vegetables are truly organic gives me peace of mind for my family's health.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img src="/logo1.png" alt="Eyal Vanam Logo" className="h-12 w-12 object-cover rounded-full border-2 border-green-600 p-1" style={{ objectPosition: 'center' }} />
              {/* Removed text "Eyal Vanam Organic Farm" as requested */}
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Products</a>
              <a href="#services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Services</a>
              <Link href="/facilities" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Facilities</Link>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
              <Button className="bg-green-600 hover:bg-green-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fresh from
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block">
                  Eyal Vanam
                </span>
                to Your Table
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience the pure taste of nature with our organically grown vegetables. 
                Cultivated with love, harvested with care, delivered with pride.
              </p>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Leaf className="h-4 w-4 text-green-500 mr-2" />
                  100% Organic
                </div>
                <div className="flex items-center">
                  <Sun className="h-4 w-4 text-yellow-500 mr-2" />
                  Daily Fresh Harvest
                </div>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 text-red-500 mr-2" />
                  Grown with Love
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Eyal Vanam Farm" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">500+ Happy Customers</p>
                    <p className="text-sm text-gray-600">Trusted by families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Eyal Vanam
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A legacy of sustainable farming, nurturing the earth while feeding communities with the finest organic produce
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Farmer working in field" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Growing with Purpose Since 1995</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Eyal Vanam has been at the forefront of organic farming for over 25 years. Our commitment to sustainable 
                agriculture and chemical-free farming practices has made us a trusted name in the community.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Leaf className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Organic Certification</h4>
                    <p className="text-gray-600">Certified organic by national standards with regular quality audits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Droplets className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Water Conservation</h4>
                    <p className="text-gray-600">Advanced drip irrigation systems reducing water usage by 40%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="h-3 w-3 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Impact</h4>
                    <p className="text-gray-600">Supporting local economy and providing healthy food options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fresh Produce
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Seasonal vegetables grown with care, harvested at peak freshness
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-600 text-white">Fresh</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive farming solutions focused on quality and sustainability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Farm Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our organic farm and see the beauty of sustainable agriculture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                src: "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Organic vegetable garden",
                title: "Organic Garden"
              },
              {
                src: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Farmer working in field",
                title: "Farm Work"
              },
              {
                src: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Fresh tomatoes",
                title: "Fresh Tomatoes"
              },
              {
                src: "https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Leafy greens",
                title: "Leafy Greens"
              },
              {
                src: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Root vegetables",
                title: "Root Vegetables"
              },
              {
                src: "https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Fresh herbs",
                title: "Fresh Herbs"
              },
              {
                src: "https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Greenhouse farming",
                title: "Greenhouse"
              },
              {
                src: "https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Irrigation system",
                title: "Irrigation"
              },
              {
                src: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Organic carrots",
                title: "Organic Carrots"
              },
              {
                src: "https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Farm landscape",
                title: "Farm View"
              },
              {
                src: "https://images.pexels.com/photos/1327373/pexels-photo-1327373.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Fresh peppers",
                title: "Bell Peppers"
              },
              {
                src: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Organic farming tools",
                title: "Farm Tools"
              },
              {
                src: "https://images.pexels.com/photos/1300975/pexels-photo-1300975.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Seedling nursery",
                title: "Nursery"
              },
              {
                src: "https://images.pexels.com/photos/1327405/pexels-photo-1327405.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Harvest time",
                title: "Harvest"
              },
              {
                src: "https://images.pexels.com/photos/1458669/pexels-photo-1458669.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Organic soil preparation",
                title: "Soil Prep"
              },
              {
                src: "https://images.pexels.com/photos/1327712/pexels-photo-1327712.jpeg?auto=compress&cs=tinysrgb&w=600",
                alt: "Fresh vegetables basket",
                title: "Fresh Basket"
              }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Vegetable Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100">Organic Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by families and businesses across the region
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg p-6">
                <CardContent className="pt-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Sun key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to experience the freshest organic produce? Contact us today!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Eyal Vanam</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Farm Location</h4>
                    <p className="text-gray-600">Molasur Village<br />(Backside to Tindivanam ITI Government College)<br />Tindivanam Taluka, Villupuram</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9585903615</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@eyalvanam.com<br />orders@eyalvanam.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 bg-green-600 text-white">
                <h3 className="text-2xl font-bold mb-2">Find Us on Map</h3>
                <p className="text-green-100">Visit our organic farm and see our sustainable practices in action</p>
              </div>
              <div className="h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.8234567890!2d79.68606!3d12.18706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDExJzEzLjQiTiA3OcKwNDEnMDkuOCJF!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eyal Vanam Farm Location"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">Farm Visits Welcome</h4>
                    <p className="text-sm text-gray-600">Call ahead to schedule your visit</p>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Eyal Vanam</span>
                  <p className="text-sm text-gray-400">Organic Farm</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Cultivating organic excellence for over 25 years. From our farm to your family, 
                we deliver the freshest, healthiest produce with love and care.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Organic Vegetables</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Fresh Herbs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seasonal Fruits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Farm Packages</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home Delivery</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk Orders</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Farm Visits</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultation</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Eyal Vanam Organic Farm. All rights reserved. | Certified Organic | Farm Fresh Quality</p>
          </div>
        </div>
      </footer>
    </div>
  );
}