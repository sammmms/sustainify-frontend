<script setup>
  import { RouterLink, useRouter } from "vue-router";
  import LongLogoSVG from "../assets/long_icon.svg?component";
  import NavbarWithLogo from "./NavbarWithLogo.vue";

  import HomepageSVGLarge from "../assets/homepage_icon_large.svg?component";
  import DashboardSVGLarge from "../assets/dashboard_icon_large.svg?component";
  import ExploreSVGLarge from "../assets/explore_icon_large.svg?component";
  import ProfileSVGLarge from "../assets/profile_icon_large.svg?component";

  import LogoSVG from "../assets/logo_icon.svg?component";
  import ProfileSVG from "../assets/profile_icon.svg?component";

  const router = useRouter();
</script>

<template>
  <nav class="flex h-[100px] justify-between items-center">
    <div class="flex gap-8 items-center">
      <RouterLink to="/">
        <LogoSVG class="lg:hidden" />
        <LongLogoSVG class="hidden lg:block" />
      </RouterLink>
      <RouterLink to="/">
        <HomepageSVGLarge class="block lg:hidden" />
        <NavbarWithLogo title="Homepage" iconsPath="homepage_icon" path="/" />
      </RouterLink>
      <RouterLink to="/dashboard">
        <DashboardSVGLarge class="lg:hidden" />
        <NavbarWithLogo
          title="Dashboard"
          iconsPath="dashboard_icon"
          path="/dashboard"
        />
      </RouterLink>
      <RouterLink to="/explore">
        <ExploreSVGLarge class="lg:hidden" />
        <NavbarWithLogo
          title="Explore"
          iconsPath="explore_icon"
          path="/explore"
        />
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/profile">
        <ProfileSVGLarge class="lg:hidden" />
        <NavbarWithLogo
          title="Profile"
          iconsPath="profile_icon"
          path="/profile"
        />
      </RouterLink>
    </div>
  </nav>
</template>
