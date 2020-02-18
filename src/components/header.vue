<template>
    <div>
        <header id="grad">
            <nav>
                <ul>
                    <li>
                        <router-link to = '/home'>Home</router-link>
                    </li>
                    <li>
                        <router-link to = '/blogSite'>Blog Site</router-link>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>


<style scoped>

#grad {
  background: red; /* For browsers that do not support gradients */
  background: -webkit-radial-gradient(red, yellow, green); /* Safari 5.1 to 6.0 */
  background: -o-radial-gradient(red, yellow, green); /* For Opera 11.6 to 12.0 */
  background: -moz-radial-gradient(red, yellow, green); /* For Firefox 3.6 to 15 */
  background: radial-gradient(red, yellow, green); /* Standard syntax */
}
li{
    display: inline;
    padding: 10px 20px;
    margin: 20px 20px;
    list-style-type: none;
    text-decoration: none;
}
</style>
