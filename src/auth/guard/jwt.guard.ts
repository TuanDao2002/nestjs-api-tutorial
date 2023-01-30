import { AuthGuard } from '@nestjs/passport';

// the name of strategy it uses to guard
export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
