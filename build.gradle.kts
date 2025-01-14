import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "2.0.21"
}

group = "org.nickel.squeezer"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

tasks.withType<KotlinCompile> {
    compilerOptions.jvmTarget.set(JvmTarget.JVM_22) // Align with the Java version
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(22)) // Align with the Kotlin version
    }
}

dependencies {

    implementation("com.fasterxml.jackson.module:jackson-module-kotlin:2.13.0")
    implementation("io.dropwizard:dropwizard-client:4.0.11")
    implementation("io.dropwizard:dropwizard-core:4.0.11") // Adjust the version if needed
    implementation("io.dropwizard:dropwizard-jackson:4.0.11") // If you need Jackson support
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8") // Kotlin standard library
    testImplementation("io.dropwizard:dropwizard-testing:2.1.0") // For testing support
    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

