package org.nickel.squeezer.service


import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import io.dropwizard.client.HttpClientBuilder
import io.dropwizard.core.setup.Environment
import org.nickel.squeezer.model.Product
import java.net.HttpURLConnection
import java.net.URL

class ShopService(environment: Environment) {
    private val client = HttpClientBuilder(environment).build("product-client")
    val willysMilkyWayURL = "https://www.willys.se/search?q=potatis&page=0&size=30"
    val objectMapper = jacksonObjectMapper()

    fun getProductsFromShop(shopName: String, productName: String): List<Product> {
        val connection = URL(willysMilkyWayURL).openConnection() as HttpURLConnection
        connection.requestMethod = "GET"
        connection.setRequestProperty("Accept", "application/json")

        val response = connection.inputStream.bufferedReader().use { it.readText() }


        val jsonNode = objectMapper.readTree(response)

        return jsonNode["results"]
            .take(3)
            .map {
                Product(
                    id = it["code"].asText(),
                    name = it["name"].asText(),
                    price = it["price"].asText(),
                    url = it["image"]?.get("url")?.asText() ?: it["thumbnail"]?.get("url")?.asText() ?: ""
                )
            }
    }
}