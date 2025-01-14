package org.nickel.squeezer.resource

import io.dropwizard.core.setup.Environment
import jakarta.ws.rs.GET
import jakarta.ws.rs.Path
import org.nickel.squeezer.model.Product
import org.nickel.squeezer.service.ShopService

@Path("/hello")
class MyResource(environment: Environment) {
    val shopService = ShopService(environment)

    @GET
    fun sayHello(): List<Product>? {
        return shopService.getProductsFromShop("Willys", "mjölk")
    }

}