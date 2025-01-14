package org.nickel.squeezer

import io.dropwizard.core.Application
import io.dropwizard.core.setup.Bootstrap
import io.dropwizard.core.setup.Environment
import jakarta.servlet.FilterRegistration
import org.eclipse.jetty.servlets.CrossOriginFilter
import org.nickel.squeezer.config.MyConfig
import org.nickel.squeezer.resource.MyResource

class MyApplication : Application<MyConfig>() {
    override fun initialize(bootstrap: Bootstrap<MyConfig>) {}

    override fun run(configuration: MyConfig, environment: Environment) {
         environment.jersey().register(MyResource(environment))

        // Enable CORS headers - basic
        val corsFilter = CrossOriginFilter()
        val filterRegistration: FilterRegistration.Dynamic = environment.servlets().addFilter("CORS", corsFilter)
        filterRegistration.addMappingForUrlPatterns(null, false, "/*")
    }

    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            MyApplication().run(*args)
        }
    }
}
