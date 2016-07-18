package <%= appPackage %>.injection.component;

import android.app.Application;
import android.content.Context;

import javax.inject.Singleton;

import dagger.Component;
import <%= appPackage %>.data.DataManager;
import <%= appPackage %>.data.remote.MvpStarterService;
import <%= appPackage %>.injection.ApplicationContext;
import <%= appPackage %>.injection.module.ApplicationModule;

@Singleton
@Component(modules = ApplicationModule.class)
public interface ApplicationComponent {

    @ApplicationContext
    Context context();

    Application application();

    DataManager dataManager();

    MvpStarterService mvpBoilerplateService();
}
