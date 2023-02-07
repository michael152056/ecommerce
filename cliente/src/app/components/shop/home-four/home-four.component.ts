import { Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from "src/app/modals/product.model";
import { ProductService } from "../../shared/services/product.service";
import { CartItem } from "src/app/modals/cart-item";
import { CartService } from "../../shared/services/cart.service";
import { Componentes } from 'src/app/models/Sesion';
import { SesionService } from "src/app/services/session-service.service";

@Component({
  selector: "app-home-four",
  templateUrl: "./home-four.component.html",
  styleUrls: ["./home-four.component.css"],
})
export class HomeFourComponent implements OnInit, OnDestroy {
  public banners = [];
  public currencies = ["USD", "EUR"];
  public currency: any;
  public flags = [
    { name: "English", image: "assets/images/flags/gb.svg" },
    { name: "German", image: "assets/images/flags/de.svg" },
    { name: "French", image: "assets/images/flags/fr.svg" },
    { name: "Russian", image: "assets/images/flags/ru.svg" },
    { name: "Turkish", image: "assets/images/flags/tr.svg" },
  ];
  public flag: any;

  products: Product[];

  indexProduct: number;
  shoppingCartItems: CartItem[] = [];
  wishlistItems: Product[] = [];

  public slides = [
    {
      title: "Huge sale",
      subtitle: "Up to 70%",
      image: "assets/images/carousel/banner1.jpg",
    },
    {
      title: "Biggest discount",
      subtitle: "Check the promotion",
      image: "assets/images/carousel/banner2.jpg",
    },
    {
      title: "Biggest sale",
      subtitle: "Dont miss it",
      image: "assets/images/carousel/banner3.jpg",
    },
    {
      title: "Our best products",
      subtitle: "Special selection",
      image: "assets/images/carousel/banner4.jpg",
    },
    {
      title: "Massive sale",
      subtitle: "Only for today",
      image: "assets/images/carousel/banner5.jpg",
    },
  ];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private sesion: SesionService
  ) {
    this.cartService
      .getItems()
      .subscribe(
        (shoppingCartItems) => (this.shoppingCartItems = shoppingCartItems)
      );
  }

  ngOnInit() {
    this.crearComponente();
    this.productService.getBanners().subscribe((data) => (this.banners = data));

    this.productService.getProducts().subscribe((product: Product[]) => {
      this.products = product;
    });
    this.currency = this.currencies[0];
    this.flag = this.flags[0];
  }

  ngOnDestroy(): void {}

  public changeCurrency(currency) {
    this.currency = currency;
  }
  public changeLang(flag) {
    this.flag = flag;
  }

  
  crearComponente(){
    var date = new Date();
    const componente: Componentes = {
      token: sessionStorage.getItem('token'),
      usuario: sessionStorage.getItem('usuario'),
      componente: 'Home',
      inicio: date,
      fin: date
    };

    this.sesion.crearComponente(componente.token, componente).subscribe((data)=>{
        
    }) 

  }

/*   verificarTiempo(){
    this.sesion.tiempoComponentes(sessionStorage.getItem('usuario')).subscribe((data)=>{
        if(data!=''){
          console.log(data);
        }
    }) 
  } */



}
