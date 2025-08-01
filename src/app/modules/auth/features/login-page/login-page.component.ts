import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SETTINGS_GLOBAL } from '@shared/providers/settings.provider';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'ahorrar-login-page',
  imports: [MatButtonModule, MatCheckboxModule, ReactiveFormsModule],
  template: `<div
    class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4"
  >
    <div class="max-w-md w-full">
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div class="text-center mb-8">
          <h1
            class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2"
          >
            {{ settings.title }}
          </h1>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">
            {{ auth.hasUser() ? 'Iniciar Sesión' : 'Crear Cuenta' }}
          </h2>
          <p class="text-gray-600">
            {{ auth.hasUser() ? 'Accede a tu cuenta' : 'Únete a nuestra plataforma' }}
          </p>
        </div>
      </div>
    </div>
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class LoginPageComponent {
  readonly settings = inject(SETTINGS_GLOBAL);

  readonly auth = inject(AuthService);
  readonly form = new FormGroup({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    remember: new FormControl(false)
  });

  handleSubmit() {
    throw new Error('Method not implemented.');
  }

  handleGoogleLogin() {}
}

/*

          <!-- <div class="flex bg-gray-100 rounded-lg p-1 mb-6">
            <button
              type="button"
              onClick={() => setUserType('client')}
              class={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                userType === 'client'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Cliente
            </button>
            <button
              type="button"
              onClick={() => setUserType('provider')}
              class={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                userType === 'provider'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Proveedor
            </button>
          </div>

          
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-colors mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {loading ? 'Conectando...' : `Continuar con Google`}
          </button>

          
          <div class="relative mb-6">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">o continúa con email</span>
            </div>
          </div>

          
          <form onSubmit={handleSubmit} class="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    {userType === 'client' ? 'Empresa/Organización' : 'Nombre de tu empresa'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder={userType === 'client' ? 'Nombre de tu empresa' : 'Ej: Construcciones ABC'}
                  />
                </div>
              </>
            )}

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Correo electrónico
              </label>
              <div class="relative">
                <Mail class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Contraseña
              </label>
              <div class="relative">
                <Lock class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  class="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="••••••••"
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff class="h-5 w-5" /> : <Eye class="h-5 w-5" />}
                </button>
              </div>
              {!isLogin && (
                <p class="text-xs text-gray-500 mt-1">Mínimo 6 caracteres</p>
              )}
            </div>

            {isLogin && (
              <div class="flex items-center justify-between">
                <label class="flex items-center">
                  <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span class="ml-2 text-sm text-gray-600">Recordarme</span>
                </label>
                <button type="button" class="text-sm text-blue-600 hover:text-blue-800 transition-colors">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              {loading ? 'Procesando...' : (isLogin ? 'Iniciar Sesión' : 'Crear Cuenta')}
            </button>
          </form>

          
          <div class="text-center mt-6">
            <p class="text-gray-600">
              {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
              <button
                onClick={() => setIsLogin(!isLogin)}
                class="text-blue-600 hover:text-blue-800 font-medium ml-1 transition-colors"
              >
                {isLogin ? 'Regístrate aquí' : 'Inicia sesión'}
              </button>
            </p>
          </div>

          
          {!isLogin && (
            <p class="text-xs text-gray-500 text-center mt-4">
              Al crear una cuenta, aceptas nuestros{' '}
              <a href="#" class="text-blue-600 hover:text-blue-800">Términos de Servicio</a>
              {' '}y{' '}
              <a href="#" class="text-blue-600 hover:text-blue-800">Política de Privacidad</a>
            </p>
          )}
        </div>

        
        <div class="text-center mt-6">
          <p class="text-sm text-gray-600">
            {userType === 'client' 
              ? '¿Eres proveedor? Cambia el tipo de cuenta arriba'
              : '¿Necesitas servicios? Cambia a cliente arriba'
            }
          </p>
        </div> -->
*/
