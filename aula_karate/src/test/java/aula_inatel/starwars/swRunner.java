package aula_inatel.starwars;

import com.intuit.karate.junit5.Karate;

class swRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("starwars").relativeTo(getClass());
    }    

}
